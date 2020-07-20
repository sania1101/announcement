const Announcement = require("../models/announcement")

exports.readAllAnnouncement = async(req, res)=>{
    try{
        const announcement = Announcement.find()
        const announcements = (await announcement).concat()

        res.json({'m':"all is good", 'data':JSON.stringify(announcements)})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.readOneAnnouncement = async(req, res)=>{
    try{
        const _id = req.params.id
        const announcements = await Announcement.findOne({"_id":_id})


        res.json({'m':"all is good",'data':announcements})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};


exports.readTopAnnouncement = async(req, res)=>{
    try{
        const _id = req.params.id
        const announcements = await Announcement.findOne({"_id":_id})

        
        const {Title, Description,} = announcements
        const titleArray = Title.split(' ')
        const titleNormData = titleArray.filter(item => item.length >= 2)
        const acamulator = []

        for(let i = 0; titleNormData.length > i; i++ ){
            let top = await Announcement.find({
                $and:[
                    {
                        Title:{$regex:titleNormData[i]}
                    },
                    {
                        Description:{$regex:titleNormData[i]}
                    },
                    {
                        _id: { $ne: announcements._id }
                    }
                ]
            })  
            acamulator.push(top)
        }
 
        const filterAnnouncements = acamulator.filter((item)=>item.length>0)
        //console.log(filterAnnouncements[0])


        res.json({'m':"all is good",'data':filterAnnouncements[0].slice(0,3)})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.deleteAnnouncement = async(req, res)=>{
    try{
        const id = req.params.id
        const announcement = await Announcement.deleteOne({"_id":id}) 
        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.addAnnouncement = async(req, res)=>{
    try{
        const {Title, Description, CreateDate} = req.body
        console.log(req.body)
        console.log({Title, Description, CreateDate})
        const announcement = new Announcement({Title, Description, CreateDate})
        await announcement.save();

        res.json({'m':"all is good!!!"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.editAnnouncement = async(req, res)=>{
    try{
        const {Title, Description, CreateDate} = req.body
        const _id = req.params.id
        const announcement =  await Announcement.findByIdAndUpdate({_id},{Title, Description, CreateDate})
        
        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};
