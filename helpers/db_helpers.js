
function showTable (connection) {
    connection.query('SHOW TABLES', (error, results, fields) => {
        if (error) {
          console.error(error.message);
          throw error;
        }
      
        // Process the results
        console.log('Tables in the database:');
        results.forEach((row) => {
          console.log(row[`Tables_in_${connection.config.database}`]);
        });
      
        // Close the connection
        connection.end();
    });
}

function describeTable (tablename, connection) {
    connection.query(`DESCRIBE ${tablename}`, (error, results, fields) => {
        if (error) {
          console.error(error.message);
          throw error;
        }
      
        // Process the results
        console.log(`Columns in the table ${tablename}:`);
        results.forEach((row) => {
          console.log(`Name: ${row.Field}, Type: ${row.Type}`);
        });
      
        // Close the connection
        connection.end();
    });
}
