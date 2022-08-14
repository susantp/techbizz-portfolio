import Layout from "../../layout/Layout";
import React, {FC, FormEvent, useState} from "react";

const ContactUsComponent = ({heading}): JSX.Element => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [detail, setDetail] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name === '' || email === '' || subject === '' || detail === '') {
            alert('Please fill form properly.')
            return
        }
        let form = {
            name, email, subject, detail
        }
        const response = await fetch('/api/googleSheetSubmit', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const content = await response.json();
        alert('Thank you.')
        setName('')
        setEmail('')
        setSubject('')
        setDetail('');
    }
    return (
        <div>
            <div className={`flex flex-col gap-y-4  py-20  container mx-auto`}>
                <div className={`py-4`}><h2 className={`text-xl uppercase text-center`}>{heading}</h2></div>

                <div className="w-full max-w-xs ">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                onChange={e => setName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Name"
                                value={name}
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" type="email" placeholder="Email"/>
                        </div>
                        <div className="mb-6">
                            <input
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="subject" type="text" placeholder="Subject"/>
                        </div>
                        <div className="mb-6">
                                <textarea
                                    onChange={e => setDetail(e.target.value)}
                                    defaultValue={detail}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="detail" placeholder="Detail" rows={5}></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}
ContactUsComponent.getLayout = (page) => <Layout>{page}</Layout>
export default ContactUsComponent;