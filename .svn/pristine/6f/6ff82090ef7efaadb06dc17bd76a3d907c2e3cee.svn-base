var HashTable = {
    Create: function () {
        var Arr = {};
        var obj = {};
        obj.Add = function (key, value) {
            if (Arr.hasOwnProperty(key)) {
                return false;
            } else {
                Arr[key] = value;
                return true;
            }
        };
        obj.Contains = function (key) {
            return Arr.hasOwnProperty(key);
        };
        obj.Item = function (key) {
            if (Contains(key)) {
                return Arr[key];
            } else {
                return null;
            }
        };
        obj.Items = function () { return Arr; };
        obj.Remove = function (key) {
            if (Contains(key)) {
                delete Arr[key];
            }
        }
        obj.Clear = function () {
            Arr = {};
        };
        obj.Count = function () {
            var count = 0;
            for (var i in Arr) {
                count++;
            }
            return count;
        };
        return obj;
    }
};