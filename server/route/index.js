const router = require('express').Router();
const { TaskSchema } = require('../model/Status')

router.get('/test', (req, res) => {
    console.log("Test api");
})


router.get('/all_task',async (req, res) => {
        const allTask = await TaskSchema.find();

        return res.status(200).json({
            success: true,
            data: allTask
        })
});


router.post('/create_task',async (req, res) => {
    let { task, date } = req.body;
    if(task === undefined) return res.status(200).json({success: false, message: "Task name is required"})
    const findTask = await TaskSchema.find({task: task});
    if(findTask.length > 0) return res.status(200).json({
        success: false,
        message: "This task already created"
    })
    
    try{
        const createTask = new TaskSchema({
            task: task,
            date: date
        });
        await createTask.save();
    
        return res.status(200).json({
            success: true,
            data: createTask
        })

    } catch(err) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
});

router.put('/update_task/:_id',async (req, res) => {
    let { _id } = req.params;

   try {
    const updateTask =  await TaskSchema.findByIdAndUpdate(_id,{
                status: "completed"
            })

    // await updateTask.save();
    return res.status(200).json({
        success: true,
        data: updateTask
    })
   } catch(e) {
       console.log("err while updating the task status", e)
       return res.status(500).json({
           success: false,
           message: "Internal server error"
       })
   }
});



module.exports = router;



