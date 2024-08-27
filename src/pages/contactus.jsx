import React from "react";
import Layout from "../components/layout";

const ContactUs = () => {
    return (
        <Layout>
            <main className="text-gray-600 body-font mt-36 mx-auto max-w-fit mt-16 lg:mt-40">
                <div className="container lg:items-center justify-center m-auto">
                    <h1 className="text-2xl font-bold text-gray-800 lg:text-5xl text-center">
                        Contact Us
                    </h1>
                    <p className="text-sm  mt-5 text-gray-800 lg:text-sm text-center">
                        We'd love to hear from you! Reach out to us with any questions or feedback.
                    </p>
                </div>
                <section className="text-gray-600 body-font mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-40 md:mt-10 lg:mt-20">
                    <div className="container lg:items-center justify-center m-auto">
                        <div className="lg:container">
                            <h1 className="text-2xl font-bold text-gray-800 lg:text-5xl text-center">
                                Contact Information
                            </h1>
                            <p className="text-sm  mt-5 text-gray-800 lg:text-sm text-center">
                                Email:
                                <a href="mailto:" className="text-blue-500">
                                    abc@gmail.com 
                                </a>
                            </p>
                            <p className="text-sm  mt-5 text-gray-800 lg:text-sm text-center">
                                Phone:
                                <a href="tel:" className="text-blue-500">
                                    123-456-7890
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
export default ContactUs;