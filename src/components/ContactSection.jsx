import { useForm } from "react-hook-form";
import swal from 'sweetalert';
function LoginPage() {
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleSendEmail = async (data)=> {
        
        console.log(data)
        try {
            const res = await fetch("https://assignment-12-server-vercel.vercel.app/email", {
              method: "POST",
              headers: {
                  "Content-type": "application/json"
              },
              body: JSON.stringify(data)
            })
  
            const result = await res.json();
            console.log(result)

            swal({
                    title: "Email message send successfully!",
                    icon: "success",
                });
            
        } catch (error) {
            swal({
                    title: "There is a problem!",
                    icon: "warning",
                });   
        }
    }


    return (
    <>
        <div className='pt-20 -mb-2 bg-gray-300 rounded-lg my-24 container mx-auto' >
            <div className="py-6" >
                <div className="grid grid-cols-1 rounded-lg shadow-2xl overflow-hidden mx-auto container items-center bg-wite">
                    <div className="p-8">
                        <h2 className="text-2xl font-semibold text-gray-700 text-center">Contact Me</h2>
                        
                        <form onSubmit={handleSubmit(handleSendEmail)}>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-400">This field is required</span>}
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-400">This field is required</span>}
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" {...register("subject")} />
                        </div>
                        
                        <div className="mt-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                        <textarea className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none min-h-96" placeholder="Message" {...register("text", { required: true })} ></textarea>
                        {errors.text && <span className="text-red-400">This field is required</span>}
                    </div>
                        <div className="mt-8">
                            <button type='submit' className='font-bold py-2 px-16  rounded bg-gray-700 text-white' >Send</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default LoginPage