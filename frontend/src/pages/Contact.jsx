import React,{useState, useEffect} from "react";
import cafelinInside from "../assets/cafelinInside.jpg";
import { CiMap } from "react-icons/ci";
import { motion } from 'motion/react'
import MyInput from "../components/Input";
import Textarea from "../components/Textarea";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../components/Loader";

const Contact = () => {

    const [loader, setLoader] = useState(true)
      useEffect(()=>{
       const timer = setTimeout(()=>setLoader(false), 3000)
        return () => clearTimeout(timer) 
      })

  const bgimage = {
    backgroundImage: `url(${cafelinInside})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "40vh",
    widht: "100vw",
    filter: "brightness(65%)",
  };

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
    const onSubmit = async (data, e) => {
        const formData = new FormData(e.target);

        formData.append("access_key", "8003a349-18c7-4239-841b-3d1d23f5c6b4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const mailData = await response.json();

        if (mailData.success) {
            toast.success(mailData.message)
            e.target.reset();
        } else {
            console.log("Error", mailData);
            toast.error(mailData.message);
        }
    }

  return (
    <div className="min-h-screen">
        {loader && <Loader />}
      <ToastContainer theme="dark" />
      <div style={bgimage} className="flex justify-center items-center">
        <h1 className="text-white font-bold text-4xl md:text-[4rem] tracking-[0.25rem]">
          Contact Us
        </h1>
      </div>

      <div className="grid md:flex justify-items-center md:justify-between items-center gap-20 md:gap-2 w-full md:w-[80vw] lg:w-[80vw] mx-auto px-3 my-24">
        <div className="info grid justify-items-center  items-center gap-7 lg:gap-12">
          <div className="icon">
            <CiMap className="size-36 text-custom-brown" />
          </div>
          <div className="address text-center w-44 lg:w-80 lg:text-xl text-black font-bold">
            G - 145, Happy Goldmine Shopper, Nr. Safal Sqaure, Vesu, Surat,
            395007
          </div>
          <div className="contact grid justify-items-center items-center gap-2 lg:text-lg text-black">
            <div className="email">
              E-mail:{" "}
              <span className="text-custom-brown">cafelin24@gmail.com</span>
            </div>
            <div className="phone">
              Phone: <span className="text-custom-brown">+91 9054323293</span>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            className="w-80 h-[70vh] md:h-96 lg:w-[45vw] lg:h-[65vh] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.217520428594!2d72.75985027597909!3d21.14374008381806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051e0cd0f330d%3A0x1ce217b05c0fc420!2sCafelin!5e0!3m2!1sen!2sin!4v1734966562358!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* contact us */}
      {/* change form api */}
      <div className="contact-us w-full md:w-[80vw] lg:w-[80vw] px-3 mx-auto my-8 grid justify-items-center items-center gap-5 lg:mt-16">
        <h2 className="text-custom-brown font-bold text-3xl lg:text-5xl text-center">Do You Have Any Queries?</h2>
        <h3 className="text-black font-bold text-xl lg:text-3xl">Send Us A Message</h3>
        <div className="form">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='grid grid-cols-1 md:grid-cols-2 md:gap-5 justify-start items-center'
                    >


                        <div className=''>
                            <MyInput
                                className="w-80 rounded-md"
                                placeholder={"Your Name"}
                                name={"name"}
                                {...register("name",
                                    {
                                        required:
                                        {
                                            value: true,
                                            message: "Name field is required"
                                        }
                                    }
                                )}
                            />
                            {errors.name && <span className='text-red-500 text-lg'>{errors.name.message}</span>}
                        </div>


                        <div className=''>
                            <MyInput
                                className="w-80 rounded-md"
                                type={"email"}
                                placeholder={"Your Email"}
                                name={"email"}
                                {...register("email",
                                    {
                                        required:
                                        {
                                            value: true,
                                            message: "Email field is required"
                                        },
                                        pattern:
                                        {
                                            value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                            message: "Please enter a valid email"
                                        }
                                    }
                                )}
                            />
                            {errors.email && <span className='text-red-500 text-lg'>{errors.email.message}</span>}
                        </div>


                        <div className=''>
                            <MyInput
                                className="w-80 rounded-md"
                                type="number"
                                placeholder={"Your Phone"}
                                name={"phone"}
                                {...register("phone",
                                    {
                                        required:
                                        {
                                            value: true,
                                            message: "Phone field is required"
                                        }
                                    }
                                )}
                            />
                            {errors.phone && <span className='text-red-500 text-lg'>{errors.phone.message}</span>}
                        </div>


                        <div className=''>
                            <MyInput
                                className="w-80 rounded-md"
                                placeholder={"Your Subject"}
                                name={"subject"}
                                {...register("title",
                                    {
                                        required:
                                        {
                                            value: true,
                                            message: "Subject field is required"
                                        }
                                    }
                                )}
                            />
                            {errors.title && <span className='text-red-500 text-lg'>{errors.title.message}</span>}
                        </div>


                        <div className='col-span-1 md:col-span-2'>
                            <Textarea
                                className='w-full h-36 rounded-md'
                                placeholder={"Start Writing Your Message Here...."}
                                name={"description"}
                                {...register("description",
                                    {
                                        required:
                                        {
                                            value: true,
                                            message: "Message field is required"
                                        }
                                    }
                                )}
                            />
                            {errors.description && <span className='text-red-500 text-lg'>{errors.description.message}</span>}
                        </div>

                        <motion.div
                            whileInView={{
                                translateY: [100, -20, 0],
                                opacity: [0, 1],
                                transition: { duration: 1 }
                            }}
                            className='grid col-span-1 md:col-span-2 justify-center md:justify-start items-center'>

                            <button
                                className=' px-4 py-3 rounded-lg bg-custom-brown text-white font-bold text-lg '
                                type="submit"
                                disabled={isSubmitting ? true : false}
                            >
                                {isSubmitting ? <span className="loading loading-spinner loading-lg text-custom-green">loading</span> : "Submit Now"}
                            </button>

                        </motion.div>
                    </form>
                </div>
      </div>
    </div>
  );
};

export default Contact;
