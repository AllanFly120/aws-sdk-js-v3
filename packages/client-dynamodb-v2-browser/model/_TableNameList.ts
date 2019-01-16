import {ListModel as _ListModel_} from '@aws-sdk/types';

export const _TableNameList: _ListModel_<string, any> = {
    parse(data: any): Array<string> {
        return (data as string[]).map(_item => _item);
    },

    serialize(input: Array<string>): any {
        return input.map(_item => _item);
    }
};