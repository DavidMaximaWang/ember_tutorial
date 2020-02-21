import Model, {attr} from '@ember-data/model';

const COMMUNITY_CATEGORIES = [
    'Condo',
    'Townhouse',
    'Apartment'
]

export default class RentalModel extends Model{
    @attr title;
    @attr owner;
    @attr city;
    @attr location;
    @attr category;
    @attr image;
    @attr bedroom;
    @attr description;

    //The @attr decorate the attributes of the model. e.g. title in model.attributes

    get type (){
        if (COMMUNITY_CATEGORIES.includes(this.category)){
            return 'Community';
        }
        else{
            return 'Standalone'
        }
    }
}