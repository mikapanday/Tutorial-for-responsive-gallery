export const schema = {
    "models": {
        "Post": {
            "name": "Post",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "img_url": {
                    "name": "img_url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "photo_description": {
                    "name": "photo_description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "child_name": {
                    "name": "child_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "child_id": {
                    "name": "child_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Posts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "b9d3dbd7cc65a83f6ef305ddce075b86"
};