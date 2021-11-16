import { initialState, setFiles, addActiveFile, removeActiveFile, updateFileCode, setEditorActiveFile, filesReducer } from "./files";

describe('files slice', () => {
    it('should set user files when the action is setFiles', () => {
        const userFiles = [
            { id: '1', name: 'index.js', relativePath: 'src/index.js', code: 'console.log("Hello World !")', extension: '.js' },
            { id: '2', name: 'server.js', relativePath: 'src/server.js', code: 'console.log("Hello Server !")', extension: '.js' }
        ];
        const expectedState = {
            ...initialState,
            userFiles,
            activeFilesIds: [],
        };
        expect(filesReducer(initialState, setFiles(userFiles))).toEqual(expectedState);
    });

    it('should add a new file id when the action is addActiveFile', () => {
        const expectedState = {
            ...initialState,
            activeFilesIds: ['1'],
        };
        expect(filesReducer(initialState, addActiveFile('1'))).toEqual(expectedState);
    });

    it('should remove a file id when the action is removeActiveFile', () => {
        const modifiedInitialState = {
            ...initialState,
            activeFilesIds: ['1'],
        };

        const expectedState = {
            ...modifiedInitialState,
            activeFilesIds: [],
        };

        expect(filesReducer(modifiedInitialState, removeActiveFile('1'))).toEqual(expectedState);
    });

    it('should set the editor active file id to be null when the action is setEditorActiveFile', () => {
        const expectedState = {
            ...initialState,
            editorActiveFileId: null,
        };

        expect(filesReducer(initialState, setEditorActiveFile(null))).toEqual(expectedState);
    });

    it('should update the code of a file when the action is updateFileCode', () => {
        const payload = {
            fileId: '1',
            newCode: 'console.log("No way man!")',
        };

        const modifiedInitialState = {
            ...initialState,
            userFiles: [
                { id: '1', name: 'index.js', relativePath: 'src/index.js', code: 'console.log("Hello World !")', extension: '.js' },
            ]
        };

        const expectedState = {
            ...modifiedInitialState,
            userFiles: [
                { id: '1', name: 'index.js', relativePath: 'src/index.js', code: 'console.log("No way man!")', extension: '.js' },
            ]
        };

        expect(filesReducer(modifiedInitialState, updateFileCode(payload))).toEqual(expectedState);
    });

    it('should not update the state when file is not found', () => {
        const payload = {
            fileId: '2',
            newCode: 'console.log("No way man!")',
        };

        const modifiedInitialState = {
            ...initialState,
            userFiles: [
                { id: '1', name: 'index.js', relativePath: 'src/index.js', code: 'console.log("Hello World !")', extension: '.js' },
            ]
        };

        const expectedState = modifiedInitialState;

        expect(filesReducer(modifiedInitialState, updateFileCode(payload))).toEqual(expectedState);
    })
})