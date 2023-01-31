public with sharing class ContactControllerHandler {
    @AuraEnabled(cacheable = true)
    public static List<Contact> fetchContacts() {
        return [ SELECT Id, Name, Email, Phone FROM Contact ORDER BY Name ASC LIMIT 20];    
    }


    @AuraEnabled
    public static void deleteSelectedContacts(List<Contact> contactLst) {
        delete contactLst;
    }

}