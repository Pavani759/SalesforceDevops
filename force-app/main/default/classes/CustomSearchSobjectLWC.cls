public with sharing class CustomSearchSobjectLWC {
    @AuraEnabled(cacheable=true)
    public static list<account> getAccountList(string searchKey) {
        string searchKeyword = '%' + searchKey + '%';
       // create contact list to store search result
        list<account> accountListRecord = new list<account>();
       // query contact records
        for(account accObj : [Select Id, Name
                            From Account
                            WHERE name LIKE : searchKeyword]){
           accountListRecord.add(accObj);
        }

         if(accountListRecord.size() == 0){
            throw new AuraHandledException('No Record Found..');
         }
        return accountListRecord;
    }
}