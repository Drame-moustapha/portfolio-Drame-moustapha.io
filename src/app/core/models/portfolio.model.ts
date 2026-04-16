export interface Portfolio {
    name: string;
    description: string;
    projects: Project[];
    skills: Skill[];
    experiences: Experience[];
    education: Education[];
    certificates: Certificate[];
    contact: Contact;
}

export interface Project {
    title: string;
    url: string;
    description: string;
}

export interface Skill {
    name: string;
    level: string;
}

export interface Experience {
    position: string;
    company: string;
    duration: string;
    description: string;
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
}

export interface Certificate {
    title: string;
    issuingOrganization: string;
    yearObtained: string;
}

export interface Contact {
    email: string;
    phone: string;
}