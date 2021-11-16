import selectActiveFiles from './selectActiveFiles';

it('should return only the active files', () => {
    const userFiles = [
        {
            id: '1',
            name: 'index1.js',
            relativePath: 'src/index1.js',
            code: 'console.log("Hello World")',
            extension: 'js',
        },
        {
            id: '2',
            name: 'index2.js',
            relativePath: 'src/index2.js',
            code: 'console.log("Hello Null")',
            extension: 'js',
        },
        {
            id: '3',
            name: 'index3.js',
            relativePath: 'src/index3.js',
            code: 'console.log("Hello Bool")',
            extension: 'js',
        }
    ];

    const activeFilesIds = ['3', '1'];

    const state = {
        files: {
            userFiles,
            activeFilesIds,
        },
    };

    const expectedResult = [
        {
            id: '3',
            name: 'index3.js',
            relativePath: 'src/index3.js',
            code: 'console.log("Hello Bool")',
            extension: 'js',
        },
        {
            id: '1',
            name: 'index1.js',
            relativePath: 'src/index1.js',
            code: 'console.log("Hello World")',
            extension: 'js',
        }
    ];
    expect(selectActiveFiles(state)).toEqual(expectedResult);
})