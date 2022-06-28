const API_KEY = "";
    const city     = "nairobi";
    const unit     = "F";
    const unit_map = "imperial"
    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    function updateDateInfo() {
        let d = new Date;
        let year = d.getFullYear();
        let month = monthNames[ d.getMonth() ];
        let date = d.getDate();
        let day = dayNames[ d.getDay() ];
        let dateString =" "+ month + ' ' + date + ', ' + year;
        document.getElementById( 'day' ).innerHTML = day;
        document.getElementById( 'date' ).innerHTML = dateString;
    }
    function updateWeatherInfo() {
        fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit_map}&APPID=${API_KEY}` )
        .then( response => response.json() ).then( data => {
            document.getElementById( 'desc' ).innerHTML = data['weather'][0]['main'];
            document.getElementById( 'temp' ).innerHTML = Math.round( data['main']['temp'] );
        } )
    }
    updateDateInfo();
    updateWeatherInfo();
    setTimeout( updateDateInfo, 30 * 60 * 1000 );
    setTimeout( updateWeatherInfo, 5 * 60 * 1000 );

