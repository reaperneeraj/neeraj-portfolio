import React from 'react'

const Social = () => {
    const social = [
        {
            name: 'Github',
            icon: 'bi-github',
            link: 'https://github.com/reaperneeraj'
        },
        // {
        //     name: 'Twitter',
        //     link: 'https://twitter.com/bhaskarijal',
        // },
        // {
        //     name: 'LinkedIn',
        //     link: 'https://linkedin.com/in/bhaskarrijal',
        // },
        {
            name: 'Instagram',
            icon: 'bi-instagram',
            link: 'https://instagram.com/pyro__sirhorww',
        },
        {
            name: 'Facebook',
            icon: 'bi-facebook',
            link: 'https://www.facebook.com/neerajgautam69/',
        },
    ]

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Social</h2>
                <ul className="list-inside">
                    {
                        social.map((social, index) => (
                            <li key={index} className='flex gap-2'>
                                <i className={`bi ${social.icon}`}/> 
                                <a href={social.link} target='_blank' className='text-primary underline italic'>
                                    <span>{social.link}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Social