import { createSelector } from "reselect";
import { FilesState } from "store/slices/files/files";
import { Userfile } from "types/Files";
import { RootState } from "types/Store";

type UserFilesMap = { [key: string]: Userfile };

const selectActiveFiles = (files: FilesState) => {
    const { userFiles, activeFilesIds } = files;
    const userFilesMap = userFiles.reduce((result, activeFile) => {
        result[activeFile.id] = activeFile;
        return result;
    }, {} as UserFilesMap);
    return activeFilesIds.map((activeFileId) => userFilesMap[activeFileId]);
};

export default createSelector((state: RootState) => state.files, selectActiveFiles)