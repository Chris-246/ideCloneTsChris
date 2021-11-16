import { styled } from '@mui/material/styles';
import CodeEditorContainer from 'components/code-editor/code-editor-container/CodeEditorContainer';
import FileViewer from 'components/code-editor/file-viewer/FileViewer';
import Layout from 'components/common/layout/Layout';

const CodeEditorDiv = styled('div')(({ theme }) => ({
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
}));

const FileViewerContainer = styled('div')({
    display: 'flex',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px',
    overflow: 'auto',
    borderRight: '1px black',
});

const CodeEditorContainerDiv = styled('div')({
    flex: 3,
    height: '100%'
});

const CodeEditor = () => {
    return(
        <Layout>
            <CodeEditorDiv>
                <FileViewerContainer>
                    <FileViewer />
                </FileViewerContainer>
                <CodeEditorContainerDiv>
                    <CodeEditorContainer />
                </CodeEditorContainerDiv>
            </CodeEditorDiv>
        </Layout>
    );
}

export default CodeEditor;