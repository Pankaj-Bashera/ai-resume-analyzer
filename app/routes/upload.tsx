import { type FormEvent, useState } from 'react'
import FileUploader from '~/components/FileUploader';
import Navbar from '~/components/Navbar'
const upload = () => {
    const [isProcessing, setisProcessing] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleFileSelect = (file:File | null) => {
        setFile(file);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget.closest('form');
        if(!form) return;
        const formData = new FormData(form);

        const companyName = formData.get('companu-name');
        const jobTitle = formData.get('job-title');
        const jobDescription = formData.get('job-description');
    }

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />
            <section className="main-section">
                <div className="page-heading py-16">
                    <h1>Smart feedback for your dream job</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src="/images/resume-scan.gif" className='w-full'></img>
                        </>
                    ) : (
                        <h2>Drop your resume for ATS score and improvement tips!</h2>
                    )}

                    {!isProcessing && (
                        <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4" >
                            <div className='form-div'>
                                <label htmlFor='company-name'>Company Name</label>
                                <input type="text" name='company-name' placeholder='Company name' id="company-name"></input>
                            </div>
                            <div className='form-div'>
                                <label htmlFor='job-title'>Job Title</label>
                                <input type="text" name='job-title' placeholder='Job Title' id="job-title"></input>
                            </div>
                            <div className='form-div'>
                                <label htmlFor='job-description'>Job Description</label>
                                <textarea rows={5} name='job-description' placeholder='Job Description' id="job-description"></textarea>
                            </div>
                            <div className='form-div'>
                                <label htmlFor='uploader'>Uploader</label>
                                <FileUploader onFileSelect={handleFileSelect} />
                            </div>
                            <button className='primary-button' type="submit">
                                Analyze Resume
                            </button>
                        </form>
                    )}
                </div>

            </section>
        </main>
    )
}

export default upload

