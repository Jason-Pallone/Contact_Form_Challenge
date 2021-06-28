SELECT 
[name] AS valuefield 
,[longname] AS labelfield 
,state_id 
regionId 
FROM TAB_SS_StateDefinitions 
WHERE(@Country = '' 
OR Country = @Country) 
AND name <> "XX" 
ORDER BY 
labelfield;
