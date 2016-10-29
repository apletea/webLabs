//Получить информацию о странице
        url: "/../PathWays/js/services/views/" + siteName
        method: "GET"
        
        
//Запрос на выборку, с возможностью в качестве параметра передать query-запрос
        url: "/../PathWays/s/cmis/query?q="
        method: "GET" 

        
//Получение информации об объекте, по его nodeRef
        url: "/../PathWays/js/service/api/node/workspace/SpacesStore/" + nodeRef
        method: "GET"
        
//Обновить данные в объекте, по его nodeRef
        url: "/../PathWays/js/service/api/node/workspace/SpacesStore/" + 
        nodeRef + "/formprocessor"
        method: "POST"
        json: jsonData
//Login
        url: "/../PathWays/js/service/api/login" 
        method: "POST"
        json: {
            "username": username 
            "password": password
        }
//Проверка на валидность ticket
        url: "/../PAthWays/js/service/api/login/ticket/" + ticket
        method: "GET"
//Обнулить ticket. Logout
        url: "/../PathWays/js/service/api/login/ticket/" + ticket
        method: "DELETE"       
