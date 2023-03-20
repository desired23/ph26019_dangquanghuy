import axios from "axios"

export const getAll = async (req, res) =>{
    try {
        const {data: users} = await axios.get("http://localhost:3001/users")
        if (users.length === 0){ 
        res.send({
            messenger: "Danh sach nguoi dung trong!"
        })
    }
    return res.status(200).json(users)
    } catch (error) {
        res.status(500).json({messenger:error})
    }
};

export const getUser = async(req, res) => {
    try {
        const {data:user} = await axios.get(`http://localhost:3001/users/${req.params.id}`);
        if (!user) {
            res.send({messenger:"Khong thim thay nguoi dung"})
        }
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({messenger:error})
    }
}
export const addUser = async(req, res) => {
    try {
        console.log(req.body)
        const {data:user} = await axios.post(`http://localhost:3001/users`, req.body);
        if (!user) {
            res.send({messenger:"Them nguoi dung khong thanh cong"});
        }
        return res.json(user)
    } catch (error) {
        res.status(500).json({messenger:error})
    }
}  
export const editUser = async(req, res) => {
    try {
        console.log(req.body)
        const {data:user} = await axios.put(`http://localhost:3001/users/${req.params.id}`, req.body);
        if (!user) {
            res.send({messenger:"Sua nguoi dung khong thanh cong"});
        }
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({messenger:error})
    }
}
export const delUser = async(req, res) => {
    try {
        await axios.delete(`http://localhost:3001/users/${req.params.id}`);
        if (!user) {
            res.send({messenger:"Xoa nguoi dung khong thanh cong"});
        }
        return res.status(200).json({
            message: "Xoa thanh cong"
        })
    } catch (error) {
        res.status(500).json({messenger:error})
    }
}
export const patchUser = async(req, res) => {
    try {
        console.log(req.body)
        const {data:user} = await axios.patch(`http://localhost:3001/users/${req.params.id}`, req.body);
        if (!user) {
            res.send({messenger:"Sua nguoi dung khong thanh cong"});
        }
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({messenger:error})
    }
}
