import React, { useState } from 'react'
import Tippy from '@tippyjs/react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast, { Toaster } from 'react-hot-toast'
import './tippy.css'
import styles from './Icons.module.scss'

import { useIconsList } from './useIconsList'

export const StyledIcons: React.FC<{ height?: number; width?: number }> = ({ height = 28, width = 28 }) => {
    const [filterText, setFilterText] = useState('')
    const { icons } = useIconsList({ filterText, height, width })

    return (
        <div>
            <input
                type='text'
                placeholder='Filter icons'
                className='w-full mb-2 max-w-md duration-300 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={(e) => setFilterText(e.target.value)}
            />
            <div className={styles['all-icons-container']}>
                <Toaster />

                {icons.map((icon) => (
                    <Tippy content={icon?.name} interactive>
                        <div
                            className='cursor-pointer'
                            onClick={() => {
                                toast.success('Copied to clipboard')
                            }}
                        >
                            <CopyToClipboard text={icon?.clipboardText || ''}>{icon?.component}</CopyToClipboard>
                        </div>
                    </Tippy>
                ))}
            </div>
        </div>
    )
}
