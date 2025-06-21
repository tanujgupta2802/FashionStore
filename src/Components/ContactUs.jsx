import React from 'react'
import { useForm } from "react-hook-form"
const ContactUs = () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
    const onSubmit = (data) =>{
      console.log("Form is submitting", data);
    }
  return (
    <>   

     <div className="min-h-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Contact FashionStore</h1>
        <p className="text-lg text-gray-600">We'd love to hear from you!</p>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <form className="space-y-6"
           onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input {...register("firstName", { required: true, minLength: {
                value:3, message:'Minimum characters should be 3'
              } })}
                type="text"
                id="name"
                className={`${errors.firstName ? 'border-2 border-red-500' : ''} mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                // className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Tanuj Gupta"
              />
              {errors.firstName && <p className='text-red-500 font-semibold'>{errors.firstName.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", { 
                  required: "Email is required", 
                  minLength: {
                    value: 5, 
                    message: "Email must be at least 5 characters"
                  },
                  pattern: { 
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                    message: "Enter a valid email"
                  }
                })} 
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="tanujgupta@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Information</h2>
          <div className="space-y-4 text-gray-600">
            <p><strong>Email:</strong> support@fashionstore.com</p>
            <p><strong>Phone:</strong> +91 9876354762</p>
            <p><strong>Address:</strong> CP, New Delhi, India</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactUs
