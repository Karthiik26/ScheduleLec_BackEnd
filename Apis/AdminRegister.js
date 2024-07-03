const AdminSchema = require('../Schema/AdminSchema');
const bcryptjs = require('bcryptjs')

async function RegisterAdmin(req, res){
    try {
        const {name , email, password, phone} = req.body;

        const checkEmail = await AdminSchema.findOne({email})
        const checkPhone = await AdminSchema.findOne({phone})

        if (checkEmail) {
            return res.status(400).json({
                message : "This Email Already Admin Exits In Our System",
                error : true
            })
        }

        if (checkPhone) {
            return res.status(400).json({
                message : "This Phone No Already Admin Exits In Our System",
                error : true
            })
        }

        // Password Hashing
        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password,salt)

        const payload = {
            name,
            email,
            password: hashPassword,
            phone
        }

        const Admin = new AdminSchema(payload);
        const Adminsave = await Admin.save();

        return res.status(201).json(
            {
                message : "Admin Created Succesfully",
                data : Adminsave,
                success:true
            }
        )

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error : true
        })   
    }
}


module.exports = RegisterAdmin