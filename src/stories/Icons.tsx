import React, { useState } from 'react'
import Tippy from '@tippyjs/react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast, { Toaster } from 'react-hot-toast'
import './tippy.css'
import styles from './Icons.module.scss'

import { HamburgerIcon } from '../components/icons/hamburger-icon'
import { BellIcon } from '../components/icons/bell-icon'
import { PdfIcon } from '../components/icons/pdf-icon'
import { QnrIcon } from '../components/icons/qnr-icon'
import { ChevronDoubleLeftIcon } from '../components/icons/chevron-double-left-icon'
import { ChevronDoubleRightIcon } from '../components/icons/chevron-double-right-icon'
import { DashboardViewIcon } from '../components/icons/dashboard-view-icon'
import { DashboardViewOutlineIcon } from '../components/icons/dashboard-view-outline-icon'
import { PeopleOutlineIcon } from '../components/icons/people-outline-icon'
import { CheckOutlineIcon } from '../components/icons/check-outline-icon'
import { CalendarIcon, NewCalendarIcon } from '../components/icons/calendar-icon'
import { AssignmentIcon } from '../components/icons/assignment'
import { AssignmentOutlineIcon } from '../components/icons/assignment-outline-icon'
import { CalendarRangeIcon } from '../components/icons/calendar-range-icon'
import { CheckFactOutlineIcon } from '../components/icons/check-fact-outline-icon'
import { PeopleIcon } from '../components/icons/people-icon'
import { ListNumberedIcon } from '../components/icons/list-numbered-icon'
import { MessageProcessingIcon } from '../components/icons/message-processing-icon'
import { DotsVerticalIcon } from '../components/icons/dots-vertical-icon'
import { SearchIcon } from '../components/icons/search-icon'
import { MessageProcessingOutlineIcon } from '../components/icons/message-processing-outline-icon'
import { ReportBoxIcon } from '../components/icons/report-box-icon'
import { ReportBoxOutlineIcon } from '../components/icons/report-box-outline-icon'
import { BellOutlineIcon } from '../components/icons/bell-outline-icon'
import { SettingsIcon } from '../components/icons/settings-icon'
import { SettingsOutlineIcon } from '../components/icons/settings-outline-icon'
import { ChevronRightIcon } from '../components/icons/chevron-right-icon'
import { ChevronLeftIcon } from '../components/icons/chevron-left-icon'
import { ChevronDownIcon } from '../components/icons/chevron-down-icon'
import { ChevronUpIcon } from '../components/icons/chevron-up-icon'
import { FindReplaceIcon } from '../components/icons/find-replace-icon'
import { PersonIcon } from '../components/icons/person-icon'
import { PersonOutlineIcon } from '../components/icons/person-outline-icon'
import { LoadingIcon } from '../components/icons/loading-icon'
import { DropUpIcon } from '../components/icons/drop-up-icon'
import { DropDownIcon } from '../components/icons/drop-down-icon'
import { ArchiveIcon } from '../components/icons/archive-icon'
import { DownloadIcon } from '../components/icons/download-icon'
import { CheckBoxCheckedIcon } from '../components/icons/checkbox-checked-icon'
import { CheckIcon } from '../components/icons/check-icon'
import { CloseIcon } from '../components/icons/close-icon'
import { PermMediaIcon } from '../components/icons/perm-media-icon'
import { PermMediaOutline } from '../components/icons/perm-media-outline-icon'
import { FindReplacePeopleIcon } from '../components/icons/find-replace-people-icon'
import { CalendarBlankOutlineIcon } from '../components/icons/calendar-blank-outline-icon'
import { ClockOutlineIcon } from '../components/icons/clock-outline-icon'

import { InboxOutboxIcon } from '../components/icons/inbox-outbox-icon'
import { InboxOutboxOutlineIcon } from '../components/icons/inbox-outbox-outline-icon'
import { TopicIcon } from '../components/icons/topic-icon'
import { EmptyPageIcon } from '../components/icons/empty-page-icon/EmptyPageIcon'
import { DragHorizontalIcon } from '../components/icons/drag-horizontal-icon'
import { FilePdfIcon } from '../components/icons/file-pdf-icon/FilePdfIcon'
import { DeleteOutlineIcon } from '../components/icons/delete-outline-icon'
import { FilterIcon } from '../components/icons/filter-icon'
import { LockIcon } from '../components/icons/lock-icon'
import { DvrIcon } from '../components/icons/dvr-icon'
import { ErrorOutlineIcon } from '../components/icons/error-outline-icon'
import { ReplayIcon } from '../components/icons/replay-icon'
import { LinkOutlineIcon } from '../components/icons/link-outline-icon'
import { FastCheckOutlineIcon } from '../components/icons/fast-check-outline-icon'
import { UnknownDocumentOutlineRoundedIcon } from '../components/icons/unknown-document-outline-rounded-icon'
import { ListStatusIcon } from '../components/icons/list-status-icon'
import { TextBoxCheckOutlineIcon } from '../components/icons/text-box-check-outline-icon'
import { ListSettingsLineIcon } from '../components/icons/list-settings-line-icon'
import { EarthIcon } from '../components/icons/earth-icon'
import { SettingsMenuHorizontalIcon } from '../components/icons/settings-menu-horizontal-icon'
import { PencilOutlineIcon } from '../components/icons/pencil-outline-icon'
import { WarningAmberOutlineIcon } from '../components/icons/warning-icon'
import { MessageReplyIcon } from '../components/icons/message-reply-icon'
import { EditSquareIcon } from '../components/icons/edit-square-icon/EditSquareIcon'
import { CheckFactIcon } from '../components/icons/check-fact-icon'
import { PlusIconCircle } from '../components/icons/plus-icon-circle'
import { HandymanOutlineIcon } from '../components/icons/handyman-outline-icon'
import { PinIcon } from '../components/icons/pin-icon'
import { WorkIcon } from '../components/icons/work-icon/WorkIcon'
import { ConsentsIcon } from '../components/icons/consents-icon'
import { MinimizeIcon } from '../components/icons/minimize-icon'
import { KeyboardCapslockIcon } from '../components/icons/keyboard-capslock-icon'
import { BadgeIcon } from '../components/icons/badge-icon'
import { PlusIcon } from '../components/icons/plus-icon'
import { HandymanIcon } from '../components/icons/handyman-icon'
import { OutlineCalendarMonth } from '../components/icons/outline-calendar-month'
import { LocationIcon } from 'src/components/icons/location-icon'
import { FormIcon } from 'src/components/icons/form-icon'
import { RepeatOutlineIcon } from 'src/components/icons/repeat-outline-icon'
import { LoginIcon, LogoutIcon, MicrosoftOutlookIcon, TimerIcon, TodayIcon } from 'src/components/icons'
import { BackIcon } from 'src/components/icons'
import { useIconsList } from './useIconsList'
import { NewWindowIcon } from 'src/components/icons/new-window-icon'
import { DoneAllIcon } from 'src/components/icons/done-all-icon'
import { UnlockIcon } from 'src/components/icons/unlock-icon'

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
                    <Tippy content={icon.name} interactive>
                        <div
                            className='cursor-pointer'
                            onClick={() => {
                                toast.success('Copied to clipboard')
                            }}
                        >
                            <CopyToClipboard text={icon.clipboardText}>{icon.component}</CopyToClipboard>
                        </div>
                    </Tippy>
                ))}
            </div>
        </div>
    )
}
