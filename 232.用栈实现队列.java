/*
 * @lc app=leetcode.cn id=232 lang=java
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
    private Stack<Integer> inStack;
    private Stack<Integer> outStack;

    public MyQueue() {
        inStack = new Stack<Integer>();
        outStack = new Stack<Integer>();
    }
    
    public void push(int x) {
        inStack.push(x);
    }
    
    public int pop() {
        if (outStack.isEmpty()){
            in2out();
        }
        return outStack.pop();
    }
    
    public int peek() {
        if (outStack.isEmpty()){
            in2out();
        }
        return outStack.peek();
    }
    
    public boolean empty() {
        return outStack.isEmpty() && inStack.isEmpty();
    }

    // 将in栈的元素转到out栈中
    private void in2out() {
        while (!inStack.isEmpty()) {
            outStack.push(inStack.pop());
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
// @lc code=end

