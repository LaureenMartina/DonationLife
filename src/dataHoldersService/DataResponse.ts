import { Collect } from './DonationData/Collect/Collect';
import {Allergen} from "./DonationData/allergen/Allergen";
import {Vaccine} from "./DonationData/Vaccines/Vaccine";
import {MedicalForm} from "./DonationData/medicalForm/MedicalForm";
import {User} from "./DonationData/user/User";
export class DataResponse{
    data: {
        token : String,
        allergen: Allergen,
        vaccine: Vaccine,
        medicalForm: MedicalForm,
        user: User,
        collect: Collect,
        allergens: Allergen[],
        vaccines: Vaccine[],
        medicalForms: MedicalForm[],
        users: User[],
        collects: Collect[]
    }
}