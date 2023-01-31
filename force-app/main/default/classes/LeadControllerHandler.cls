public with sharing class LeadControllerHandler {
    @AuraEnabled
    public static List<Lead> fetchLeads(Integer lim) {
        return [ SELECT Id, Name FROM Lead ORDER BY Name ASC LIMIT: lim];    
    }

}