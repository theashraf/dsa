struct Node<T> {
    data: T,
    next: Option<Box<Node<T>>>,
}

pub struct LinkedList<T: Clone> {
    head: Option<Box<Node<T>>>,
    size: usize,
}

impl<T: Clone> LinkedList<T> {
    pub fn new() -> Self {
        Self {
            head: None,
            size: 0,
        }
    }

    pub fn push(&mut self, data: T) {
        let new_node = Box::new(Node {
            data,
            next: self.head.take(),
        });

        self.head = Some(new_node);
        self.size += 1;
    }

    pub fn pop(&mut self) -> Option<T> {
        let old_head = self.head.take();

        if let Some(node) = old_head {
            let data = node.data;

            self.head = node.next;
            self.size -= 1;

            Some(data)
        } else {
            None
        }
    }

    pub fn size(&self) -> usize {
        self.size
    }

    pub fn to_vec(&self) -> Vec<T> {
        let mut vec = vec![];

        let mut current = &self.head;

        while let Some(node) = current {
            vec.push(node.data.clone());

            current = &node.next;
        }

        vec
    }
}

impl<T: Clone> Default for LinkedList<T> {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn create_linked_list() {
        let list: LinkedList<i8> = LinkedList::new();

        assert_eq!(list.size, 0);
    }

    #[test]
    fn push_data() {
        let mut list: LinkedList<i8> = LinkedList::new();

        assert_eq!(list.size, 0);

        list.push(8);

        assert_eq!(list.size, 1);

        list.push(9);

        assert_eq!(list.size, 2);
    }

    #[test]
    fn pop_data() {
        let mut list: LinkedList<i8> = LinkedList::new();

        assert_eq!(list.size, 0);

        list.push(8);
        list.push(9);

        assert_eq!(list.size, 2);

        assert_eq!(list.pop(), Some(9));
        assert_eq!(list.pop(), Some(8));
        assert_eq!(list.pop(), None);
    }

    #[test]
    fn convert_to_vec() {
        let mut list: LinkedList<i8> = LinkedList::new();

        list.push(8);
        list.push(9);

        let vec = list.to_vec();

        assert_eq!(vec![9, 8], vec);
    }
}
