import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import CartModel from "@/models/Cart";


export async function POST(req) {
  try {
    connectToDB();
    const reqBody = await req.json();
    const { userID, productID } = reqBody;

    // find cart
    const userCarts = await CartModel.find({ userID });

    let openCart = userCarts.filter((cart) => {
      return cart.status === "open";
    });

    if (openCart.length === 0) {
      openCart = await CartModel.create({ userID });
    }

    // find product
    const product = await ProductModel.findOne({ _id: productID });

    // add product to cart
    const isInCart = openCart[0].product.filter((product) => {

      return JSON.stringify(product.productID) === JSON.stringify(productID);
    });

let newCart
    if(isInCart.length === 0){

      newCart = await CartModel.findOneAndUpdate(
          { _id: openCart[0]._id },
          {
            $addToSet: {
              product: [
                {
                  productID: productID,
                  count: 1,
                  price: product.price,
                },
              ],
            },
          },
          { returnDocument: "after" }
      );
    
    }else{

     newCart = await CartModel.findOneAndUpdate(
          { _id: openCart[0]._id , 'product.productID':productID},
          {

            $inc:{"product.$.count" : 1}

          },
          { returnDocument: "after" }
      );
    }

let sum=0
   newCart.product.map((product)=>{
        sum= sum+(product.count * product.price)

    })

      console.log("sum",sum)

      newCart = await CartModel.findOneAndUpdate(
          { _id: openCart[0]._id },
          {
              $set: {
                  totalPrice: sum,
              },
          },
          { returnDocument: "after" }
      );


    

    return Response.json(
      {
        message: "product  add  successfully :))",
        data: newCart,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
