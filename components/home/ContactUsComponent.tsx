import Layout from "../../layout/Layout";
import React, {FC, FormEvent, useState} from "react";
import axios from "axios";

const ContactUsComponent = ({heading}): JSX.Element => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [detail, setDetail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name === '' || email === '' || subject === '' || detail === '') {
            alert('Please fill form properly.')
            return
        }
        const requestPath = window.location.origin + '/api/googleSheetSubmit'
        let form = {
            name, email, subject, detail
        }
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post(requestPath, JSON.stringify(form), config)
        const {data} = await response.data;
        data.status === 200
            ? setMessage('Thank you.')
            : setMessage('Something Went wrong.')
        setName('')
        setEmail('')
        setSubject('')
    }
    return (
        <div>
            <div className={`sectionDiv`}>
                <div className={`py-4`}><h2 className={`headerText`}>{heading}</h2></div>
                <div className="w-full flex flex-col gap-y-2 items-center justify-center">
                    <div
                        className={`text-center text-green-800 font-bold ${message !== '' ? 'visible' : 'invisible'}`}>{message}</div>
                    <form className={`flex flex-col  w-1/2 gap-y-2`} onSubmit={handleSubmit}>
                        <input
                            onChange={e => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Name"
                            value={name}
                        />
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Email"
                        />
                        <input
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="subject" type="text" placeholder="Subject"
                        />
                        <textarea
                            onChange={e => setDetail(e.target.value)}
                            defaultValue={detail}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="detail" placeholder="Detail" rows={5}
                        >

                    </textarea>
                        <button
                            className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>

                </div>

            </div>
        </div>
    )
}
ContactUsComponent.getLayout = (page) => <Layout>{page}</Layout>
export default ContactUsComponent;