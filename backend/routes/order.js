import express from "express";
import Order from "../model/orderSchema.js";

const router = express.Router();

// POST route to get all orders
router.post("/getOrders", async (req, res) => {
  const { user } = await req.body;
  try {
    const orders = await Order.find({user:user,isDone:false});
    if (orders) {
      res.status(200).json({message:orders,status:200});
    } else {
      res.status(404).json({ message: "No orders found", status: 404 });
    }
  } catch (error) {
    console.log("Error in /getOrders:", error.message);
    res.json({ message: "something went Wrong!!! Try again later", status: 500 });
  }
});

// GET route to get orders for admin
router.get("/getOrders", async (req, res) => {
  try {
    const orders = await Order.find({isDone:false});
    if (orders) {
      res.status(200).json({message:orders,status:200});
    } else {
      res.status(404).json({ message: "No orders found", status: 404 });
    }
  } catch (error) {
    console.log("Error in /getOrders:", error.message);
    res.json({ message: "something went Wrong!!! Try again later", status: 500 });
  }
});

// POST route to add order
router.post('/addOrders',async(req,res)=>{
  const data=await req.body;
  try {
    const orders=await Order.insertMany(data)
    if(orders){
      res.status(201).json({message:"Order added successfully",status:201});
    }else{
      res.status(400).json({message:"Failed to add order!!! Try again later",status:400})
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message:"Something went wrong!!! Try again later",status:500})
  }
})


//PUT rote to change order status
router.put("/changeOrderStatus", async (req, res) => {
    const data=await req.body;
    try {
        const updateOrder=await Order.updateOne({_id:data.id},{$set:{isDone:true}});
        if(updateOrder.modifiedCount===1){
            res.status(201).json({message:"removing Order from the list",status:201});
        }else{
            res.status(400).json({message:"Failed to change order status!!! Try again later",status:400})
        }
    } catch (error) {
        console.log("while changing order status: ",error.message);
        res.json({message:"Something went wrong!!! Try again later",status:500})
    }
}
)


//DELETE route to remove order
router.delete('/removeOrder',async(req,res)=>{
    const data=await req.body;
    try {
        const removeOrder=await Order.deleteOne({_id:data.id})
        if(removeOrder.deletedCount===1){
            res.status(201).json({message:"Order removed successfully",status:201});
        }else{
            res.status(400).json({message:"Failed to remove order!!! Try again later",status:400})
        }
    } catch (error) {
        console.log("while removing order: ",error);
        res.status(500).json({message:"Something went wrong!!! Try again later",status:500})
    }
})

export default router;
