// Generated by https://quicktype.io

export class JobPosting {
    jobCode: string;
    hirerequestId: string;
    user: User;
    organization: Organization;
    jobReferences: null;
    listOfUsersFromHireRequest: null;
    jobTitle: string;
    primarySkill: string;
    jobDescription: string;
    jobFunctionalArea: string;
    noOfOpenings: number;
    department: string;
    payroleType: string;
    grade: string;
    minJobExperience: string;
    maxJobExperience: string;
    jobMinQualification: string;
    jobContactToEmail: string;
    jobContactPhone: string;
    designation: string;
    skills: string;
    jobLocation: string;
    maxNoticePeriod: string;
    minSalary: string;
    maxSalary: string;
    currency: string;
    tags: null;
    haveQuestions: boolean;
    comment: null;
    aboutCompany: string;
    clientName: string;
    client: Client;
    referral: boolean;
    referralAmount: string;
    public hiringManager: any;
    // public  hiringManager : HiringManager;
    constructor() {
        this.client = new Client();
        this.organization = new Organization();
        this.user = new User();
        // this.hiringManager=new HiringManager();

    }
}

export class Client {
    clientId: string;
}

export class Organization {
    tenantId: string;
}

export class User {
    userId: string;
}
// export class HiringManager {
//     clientContactsId: string;
// }



export class skills {
    skillname: any;

}
export class FunctionalArea {
    functionalAreaId: any;
    functionalName: any;
    additional_data: any;
}
export class Department {
    departmentId: any;
    departmentName: any;
}
export class Designation {
    designationId: any;
    designationName: any;
}
export class ReferFriend {
    candidateEmailId: any;
    candidateName: any;
    jobDescription: any;
    tenantId: any;
    refereeId: any;
    refereeName: any;

}