import React from 'react'

function EditProfile(name, phone, country,tags) {
    /*
    {
  "id": 0,
  "created_at": "now",
  "name": "string",
  "phone": "string",
  "country": "string",
  "tags": [
    "string"
  ]
}*/
  return (
    <div>EditProfile
<input type="text" value={name}/>
<input type="number"  value={phone} />
<input type="text " value={country} />
<input type="text " value={tags} />
<button>Save</button>
    </div>
    )
}

export default EditProfile