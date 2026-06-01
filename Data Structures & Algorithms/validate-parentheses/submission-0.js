class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = new Array();

        for (let i = 0; i < s.length; i++) {
            const p = s.charAt(i);
            if ( p === '(' || p === '{' || p === '[') {
                stack.push(p);
            } else {
                if (stack.length === 0) {
                    return false;
                }

                const op = stack.pop();
                if ((p === ')' && op === '(') || (p === '}' && op === '{') || (p === ']' && op === '[')) {
                    continue;
                }

                return false;
            } 
        }

        return stack.length === 0;
    }
}
