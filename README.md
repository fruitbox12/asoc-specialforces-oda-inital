README for Operational Detachment Alpha API

`Overview`

This API provides detailed information about the Operational Detachment Alpha (ODA), a specialized unit in the Special Forces. It includes data on team size, unit type, specialization, and individual member profiles.

API Structure

The API is structured to provide a comprehensive view of the ODA, including individual member details and their equipment.

`````Endpoint``s```

Get All Data:

``Endpoint``: /

Description: Retrieves the entire JSON data about the ODA team.

Get Team Details:

``Endpoint``: /team-details

Description: Returns basic details about the team, such as size, unit type, and specialization.

Get All Members:

``Endpoint``: /members

Description: Lists all team members with their detailed profiles.

Get Specific Member:

``Endpoint``: /members/:memberName

Description: Retrieves details of a specific member. Replace :memberName with the actual name (e.g., Member 1).

Get Members by Paygrade:

``Endpoint``: /members/paygrade/:paygrade

Description: Shows members of a specific paygrade. Replace :paygrade with the actual paygrade (e.g., E-7).

Get Members by MOS:

``Endpoint``: /members/mos/:mos

Description: Lists members with a specific Military Occupational Specialty. Replace :mos with the actual MOS (e.g., 18B - Special Forces Weapons Sergeant).

Get Members by Time in Special Forces:

``Endpoint``: /members/time/:years

Description: Finds members who have spent a specific amount of time in Special Forces. Replace :years with the actual duration (e.g., 5 years).

Get Member's Gear:

``Endpoint``: /members/:memberName/gear

Description: Retrieves the gear details of a specific member. Replace :memberName with the member's name (e.g., Member 1).
