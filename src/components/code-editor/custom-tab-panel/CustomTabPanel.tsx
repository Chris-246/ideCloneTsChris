import { styled } from '@mui/material/styles';
import { Userfile } from 'types/Files';
import CustomEditor from '../custom-editor/CustomEditor';

type CustomTabPanelProps = {
    activeFile: Userfile;
    editorActiveFileId: string | null;
};

const CustomTabPanel = (props: CustomTabPanelProps) => {
    const {
        activeFile,
        editorActiveFileId
    } = props;

    return (
        <CustomeTabPanelContainer role='tabpanel' hidden={editorActiveFileId !== activeFile.id}>
            <CustomEditor activeFile={activeFile} />
        </CustomeTabPanelContainer>
    )
};

const CustomeTabPanelContainer = styled('div')({ height: '100%' });

export default CustomTabPanel;