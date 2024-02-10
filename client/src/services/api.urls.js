export const API_URLS = {
    saveSentEmail:{
        endpoint: "save",
        method: "POST"
    },
    getEmailFromType:{
        endpoint: "emails",
        method: "GET"
    },
    saveDraftEmails:{
        endpoint: "save-draft",
        method: "POST"
    },
    moveEmailsToBin:{
        endpoint: "bin",
        method: "POST"
    },
    toggleStarredEmail:{
        endpoint: "starred",
        method: "POST"
    },
    deleteEmail: {
        endpoint: "delete",
        method: "DELETE"
    }
}

// this is the js file which 
// stores the objects (urlObjects) which would work with useApi hook 