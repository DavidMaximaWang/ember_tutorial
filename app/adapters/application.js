import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    namespace = 'api';

    buildURL(...args){
        console.log(args)
        return `${super.buildURL(...args)}.json`;
    }
}
