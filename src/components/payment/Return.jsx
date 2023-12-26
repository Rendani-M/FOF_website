import React from 'react'

function Return() {

  useEffect(() => {
    if (success) {
      axios.post('http://localhost:4050/confirmation', myData)
        .then(response => {
          console.log('Confirmation response:', response.data);
        })
        .catch(error => {
          console.error('Error during confirmation:', error);
        });
    }
  }, [success]);
  
  return (
    <div>Return</div>
  )
}

export default Return