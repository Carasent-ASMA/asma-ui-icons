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

import styles from './Icons.module.scss'
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

export const StyledIcons: React.FC<{ height?: number; width?: number }> = ({ height = 24, width = 24 }) => {
    return (
        <div className={styles['all-icons-container']}>
            <div title='LoadingIcon'>
                <LoadingIcon height={height} width={height} />
            </div>
            <div title='DownloadIcon'>
                <DownloadIcon height={height} width={height} />
            </div>
            <div title='ArchiveIcon'>
                <ArchiveIcon height={height} width={height} />
            </div>
            <div title='DotsVertical'>
                <DotsVerticalIcon height={height} width={height} />
            </div>
            <div title='FindReplaceIcon'>
                <FindReplaceIcon height={height} width={height} />
            </div>
            <div title='FindReplacePeopleIcon' className='cursor-pointer'>
                <FindReplacePeopleIcon className='w-[33px] h-[33px]' />
            </div>
            <div title='Search'>
                <SearchIcon height={height} width={height} />
            </div>
            <div title='SettingsOutlineIcon'>
                <SettingsOutlineIcon height={height} width={height} />
            </div>
            <div title='SettingsIcon'>
                <SettingsIcon height={height} width={height} />
            </div>
            <div title='ReportboxOutlineIcon'>
                <ReportBoxOutlineIcon height={height} width={height} />
            </div>
            <div title='ReportboxIcon'>
                <ReportBoxIcon height={height} width={height} />
            </div>
            <div title='BellOutlineIcon'>
                <BellOutlineIcon height={height} width={width} />
            </div>
            <div title='BellIcon'>
                <BellIcon height={height} width={width} />
            </div>
            <div title='HamburgerIcon'>
                <HamburgerIcon height={height} width={width} />
            </div>
            <div title='PdfIcon'>
                <PdfIcon color={'red'} height={height} width={width} />
            </div>
            <div title='QnrIcon'>
                <QnrIcon color={'#1890ff'} height={height} width={width} />
            </div>
            <div title='DropUpIcon'>
                <DropUpIcon height={height} width={width} />
            </div>
            <div title='DropDownIcon'>
                <DropDownIcon height={height} width={width} />
            </div>
            <div title='ChevronDownIcon'>
                <ChevronDownIcon height={height} width={width} />
            </div>
            <div title='ChevronUpIcon'>
                <ChevronUpIcon height={height} width={width} />
            </div>
            <div title='ChevronLeftIcon'>
                <ChevronLeftIcon height={height} width={width} />
            </div>
            <div title='ChevronRightIcon'>
                <ChevronRightIcon height={height} width={width} />
            </div>
            <div title='ChevronDoubleRightIcon'>
                <ChevronDoubleRightIcon height={height} width={width} />
            </div>
            <div title='ChevronDoubleLeftIcon'>
                <ChevronDoubleLeftIcon height={height} width={width} />
            </div>
            <div title='DashboardViewOutlineIcon'>
                <DashboardViewOutlineIcon height={height} width={width} />
            </div>
            <div title='DashboardViewIcon'>
                <DashboardViewIcon height={height} width={width} />
            </div>
            <div title='PersonIcon'>
                <PersonIcon height={height} width={width} />
            </div>
            <div title='PersonOutlineIcon'>
                <PersonOutlineIcon height={height} width={width} />
            </div>
            <div title='PeopleOutlineIcon'>
                <PeopleOutlineIcon height={height} width={width} />
            </div>
            <div title='PeopleIcon'>
                <PeopleIcon height={height} width={width} />
            </div>
            <div title='CloseIcon'>
                <CloseIcon height={height} width={width} />
            </div>
            <div title='CheckIcon'>
                <CheckIcon height={height} width={width} color='green' />
            </div>
            <div title='CheckBoxCheckedIcon'>
                <CheckBoxCheckedIcon height={height} width={width} color='green' />
            </div>

            <div>
                <CheckOutlineIcon height={height} width={width} color='green' />
            </div>

            <div title='CheckFactOutlineIcon'>
                <CheckFactOutlineIcon height={height} width={height} color='green' />
            </div>

            <div title='CheckFactIcon'>
                <CheckFactIcon height={height} width={height} color='green' />
            </div>

            <div title='CalendarIcon'>
                <CalendarIcon height={height} width={width} />
            </div>
            <div title='CalendarRangeIcon'>
                <CalendarRangeIcon height={height} width={width} />
            </div>
            <div title='OutlineCalendarMonth'>
                <OutlineCalendarMonth height={height} width={width} />
            </div>
            <div title='AssignmentOutlineIcon'>
                <AssignmentOutlineIcon height={height} width={width} />
            </div>
            <div title='AssignmentIcon'>
                <AssignmentIcon height={height} width={width} />
            </div>
            <div title='ListNumberedIcon'>
                <ListNumberedIcon height={height} width={width} />
            </div>
            <div title='MessageProcessingIcon'>
                <MessageProcessingIcon height={height} width={width} />
            </div>
            <div title='MessageProcessingOutline'>
                <MessageProcessingOutlineIcon height={height} width={width} />
            </div>
            <div title='PermMediaIcon'>
                <PermMediaIcon height={height} width={height} />
            </div>
            <div title='PermMediaOutline'>
                <PermMediaOutline height={height} width={height} />
            </div>
            <div title='CalendarBlankOutlineIcon'>
                <CalendarBlankOutlineIcon height={height} width={height} />
            </div>
            <div title='ClockOutlineIcon'>
                <ClockOutlineIcon height={height} width={height} />
            </div>
            <div title='InboxOutboxIcon'>
                <InboxOutboxIcon height={height} width={height} />
            </div>
            <div title='InboxOutboxOutlineIcon'>
                <InboxOutboxOutlineIcon height={height} width={height} />
            </div>
            <div title='TopicIcon'>
                <TopicIcon height={height} width={width} />
            </div>
            <div title='EmptyPageIcon'>
                <EmptyPageIcon height={height} width={width} />
            </div>
            <div title='DragHorizontalIcon'>
                <DragHorizontalIcon height={height} width={width} />
            </div>
            <div title='FilePdfIcon'>
                <FilePdfIcon height={height} width={width} />
            </div>
            <div title='DeleteOutlineIcon'>
                <DeleteOutlineIcon height={height} width={width} />
            </div>
            <div title='FilterIcon'>
                <FilterIcon height={height} width={width} />
            </div>
            <div title='LockIcon'>
                <LockIcon height={height} width={width} />
            </div>
            <div title='DvrIcon'>
                <DvrIcon height={height} width={width} />
            </div>
            <div title='ErrorOutlineIcon'>
                <ErrorOutlineIcon height={height} width={width} />
            </div>
            <div title='ReplayIcon'>
                <ReplayIcon height={height} width={width} />
            </div>
            <div title='LinkOutlineIcon'>
                <LinkOutlineIcon height={height} width={width} />
            </div>
            <div title='FastCheckOutlineIcon'>
                <FastCheckOutlineIcon height={height} width={width} />
            </div>
            <div title='UnknownDocumentOutlineRoundedIcon'>
                <UnknownDocumentOutlineRoundedIcon height={height} width={width} />
            </div>
            <div title='ListStatusIcon'>
                <ListStatusIcon height={height} width={width} />
            </div>
            <div title='TextBoxCheckOutlineIcon'>
                <TextBoxCheckOutlineIcon height={height} width={width} />
            </div>
            <div title='ListSettingsLineIcon'>
                <ListSettingsLineIcon height={height} width={width} />
            </div>
            <div title='EarthIcon'>
                <EarthIcon height={height} width={width} />
            </div>
            <div title='SettingsMenuHorizontalIcon'>
                <SettingsMenuHorizontalIcon height={height} width={width} />
            </div>
            <div title='PencilOutlineIcon'>
                <PencilOutlineIcon height={height} width={width} />
            </div>
            <div title='OutlineWarningAmberIcon'>
                <WarningAmberOutlineIcon height={height} width={height} className='text-amber-600' />
            </div>
            <div title='ConsentsIcon'>
                <ConsentsIcon height={height} width={height} className='text-blue-600' />
            </div>
            <div title='MinimizeIcon'>
                <MinimizeIcon height={height} width={height} className='text-delta-700' />
            </div>
            <div title='KeyboardCapslockIcon'>
                <KeyboardCapslockIcon height={height} width={height} color='violet' />
            </div>
            <div title='MessageReplyIcon'>
                <MessageReplyIcon height={height} width={height} />
            </div>
            <div title='BadgeIcon'>
                <BadgeIcon height={height} width={height} color='violet' />
            </div>

            <div title='EditSquareIcon'>
                <EditSquareIcon height={height} width={height} color='violet' />
            </div>

            <div title='PlusIcon'>
                <PlusIcon height={height} width={height} color='green' />
            </div>

            <div title='PlusIconCircle'>
                <PlusIconCircle height={height} width={height} color='text-gray-700' />
            </div>

            <div title='HandymanOutlineIcon'>
                <HandymanOutlineIcon height={height} width={height} color='text-gray-700' />
            </div>

            <div title='HandymanIcon'>
                <HandymanIcon height={height} width={height} color='text-gray-700' />
            </div>

            <div title='PinIcon'>
                <PinIcon height={height} width={height} color='text-gray-700' />
            </div>

            <div title='WorkIcon'>
                <WorkIcon height={height} width={height} className='text-gama-500' />
            </div>

            <div title='NewCalendarIcon'>
                <NewCalendarIcon height={height} width={height} className='text-delta-800' />
            </div>

            <div title='LocationIcon'>
                <LocationIcon height={height} width={height} />
            </div>
        </div>
    )
}
