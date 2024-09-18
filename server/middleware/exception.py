class DataNotFound(Exception):
    def __init__(self, message="Data not found"):
        self.message = message
        super().__init__(self.message)


class DataConflict(Exception):
    def __init__(self, message="Invalid Input"):
        self.message = message
        super().__init__(self.message)
