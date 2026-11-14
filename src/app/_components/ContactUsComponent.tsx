"use client";

import React, {FormEvent, useState} from "react";
import axios from "axios";
import type { page } from "@/content/page";

type ContactContent = typeof page.contact;

const ContactUsComponent = ({content}: { content: ContactContent }): React.JSX.Element => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [detail, setDetail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name === '' || email === '' || subject === '' || detail === '') {
            alert(content.messages.incomplete)
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
        try {
            const response = await axios.post(requestPath, JSON.stringify(form), config)
            const {data} = await response.data;
            setMessage(content.messages.success)
            setName('')
            setEmail('')
            setSubject('')
        } catch (error) {
            console.error(error)
            setMessage(content.messages.error)
        }

    }
    return (
        <div>
            <div className={`sectionDiv`}>
                <div className={`py-4`}><h2 className={`headerText`}>{content.heading}</h2></div>
                <div className="w-full flex flex-col gap-y-2 items-center justify-center">
                    <div
                        className={`text-center text-green-800 font-bold ${message !== '' ? 'visible' : 'invisible'}`}>{message}</div>
                    <form className={`flex flex-col  w-1/2 gap-y-2`} onSubmit={handleSubmit}>
                        <input
                            onChange={e => setName(e.target.value)}
                            className="shadow-sm appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-hidden focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder={content.placeholders.name}
                            value={name}
                        />
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="shadow-sm appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-hidden focus:shadow-outline"
                            id="email" type="email" placeholder={content.placeholders.email}
                        />
                        <input
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            className="shadow-sm appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-hidden focus:shadow-outline"
                            id="subject" type="text" placeholder={content.placeholders.subject}
                        />
                        <textarea
                            onChange={e => setDetail(e.target.value)}
                            defaultValue={detail}
                            className="shadow-sm appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-hidden focus:shadow-outline"
                            id="detail" placeholder={content.placeholders.detail} rows={5}
                        >

                    </textarea>
                        <button
                            className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-hidden focus:shadow-outline"
                            type="submit"
                        >
                            {content.submitLabel}
                        </button>
                    </form>

                </div>

            </div>
        </div>
    )
}
export default ContactUsComponent;
