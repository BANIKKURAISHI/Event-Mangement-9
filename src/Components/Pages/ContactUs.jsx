

const ContactUs = () => {
    return (
        <div>
                  
                <form className="card mx-[650px] my-36">
                    <h1 className="text-4xl text-rose-950 font-bold my-5">Wedding Enquiries</h1>
                    <h3 className="text-2xl text-rose-950 font-bold my-5">Fill in the form below and we’ll be in contact as soon as possible to discuss how The Bishop’s Palace and Gardens can help to make your special day unforgettable:</h3>
                    <div className="flex flex-row">
                    <input  className="input input-bordered w-96 mb-2"  type="text" name="name " placeholder="Enter your name"  />
                    <input  className="input input-bordered  w-96 mb-2" type="text" name="email " placeholder="Enter your email" />
                    </div>
                    <div className="flex flex-row">
                    <input  className="input input-bordered  w-96 mb-2" type="text" name="phone number " placeholder="Enter your phone number" />
                    <input  className="input input-bordered  w-96 mb-2" type="text" name="address" placeholder="Enter your address" />
                    </div>
                    <textarea  className="input input-bordered h-40" placeholder="Please give your important feedback " name="text area" id="area" cols="50" rows="50"></textarea>
                    <input type="submit" value="Submit" className="bg-rose-700 text-white w-32 p-2 m-4 rounded-md text-center justify-center mx-60" />
                </form>
               
          
        </div>
    );
};

export default ContactUs;