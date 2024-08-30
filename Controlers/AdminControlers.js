const Admin = require('../Models/Admin/AdminSchema')



const CreateAmin = async (req,res)=>{
const name  = req.params.name
const key = req.params.key

console.log(name,key)

if(name === 'gaffaradif'){

    const AdminCreateACc = new Admin(
        {
            AdminSecretKey : key
        }
    )
    await AdminCreateACc.save()

}



res.send('its working')


}

// send admin data 
const SendAdminData = (req,res)=>{

const   key = req.params.key

if(key === 'Gaffar1008'){
    res.status(200).json(
        {
            isAdmin : true
        }
    )
}else{
    res.status(200).json(
        {
            isAdmin : false
        }
    )
}




}

module.exports = {CreateAmin,SendAdminData}
