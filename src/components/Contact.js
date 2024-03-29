import React from 'react';
import Confirmation from './Confirmation';

export default function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [submited, setSubmited] = React.useState(false);

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => {
        setMessage('');
        setEmail('');
        setName('');
        setSubmited(true);
      })
      .catch(error => alert(error));
  }

  function closeModal() {
    setSubmited(false);
  }

  return (
    <section id='contact' className='relative'>
      {submited ? <Confirmation onClose={closeModal} /> : null}
      <div className='container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap justify-around'>
        <form netlify name='contact' className='lg:w-1/2 md:w-1/2 flex flex-col w-full px-20' onSubmit={handleSubmit}>
          <h2 className='sm:text-4xl text-3xl mb-1 font-medium title-font'>Contact Me</h2>
          <div className='relative mb-4'>
            <label htmlFor='name' className='leading-7 text-sm'>
              Name
            </label>
            <input
              onChange={e => {
                setName(e.target.value);
              }}
              value={name}
              type='text'
              id='name'
              name='name'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              required
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm'>
              Email
            </label>
            <input
              onChange={e => {
                setEmail(e.target.value);
              }}
              type='email'
              value={email}
              id='email'
              name='email'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              required
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='message' className='leading-7 text-sm'>
              Message
            </label>
            <textarea
              onChange={e => {
                setMessage(e.target.value);
              }}
              value={message}
              id='message'
              name='message'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
              required
            />
          </div>
          <button type='submit' className='text-white bg-indigo-500 border-0 py-2 px-6 self-end focus:outline-none hover:bg-indigo-600 rounded text-lg lg:w-1/3 md:w-1/2'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
