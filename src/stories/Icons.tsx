import { useState, type FC } from 'react'
import Tippy from '@tippyjs/react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast, { Toaster } from 'react-hot-toast'
import './tippy.css'

import { useIconsList } from './useIconsList'

export const StyledIcons: FC<{ height?: number; width?: number }> = ({ height = 28, width = 28 }) => {
    const [filterText, setFilterText] = useState('')
    const { icons } = useIconsList({ filterText, height, width })

    return (
        <div>
            <input
                type='text'
                placeholder='Filter icons'
                className='mb-2 w-full max-w-md rounded-md border border-gray-300 p-2 duration-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500'
                onChange={(e) => setFilterText(e.target.value)}
            />
            <div className='flex h-full w-full flex-wrap items-center gap-5 bg-gray-100 p-5'>
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
