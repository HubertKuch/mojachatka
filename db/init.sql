INSERT INTO AccountPackets (id, subname, name, price, properties) VALUES 
(
    uuid(), "Individual", "Standard", 2999, '{ "listings": 4, "fields": ["UwU"], "boosts": [{ "days": 7 }], "expirationDays": 30, "allowedFor": ["INDIVIDUAL"], "boostDiscount": 7 }'  
);

INSERT INTO BoostPacket (id, name, price, days, properties) VALUES
(uuid(), "Seven days", 1499, 7, "{}");

