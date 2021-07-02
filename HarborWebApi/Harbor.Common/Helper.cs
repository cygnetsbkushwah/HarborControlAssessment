using System;

namespace Harbor.Common
{
    public static class Helper
    {
        #region Public Variables

        public static Random Random = new Random();

        #endregion

        #region Public Methods 

        public static T GeRandomValue<T>()
        {
            var enumList = Enum.GetValues(typeof(T));
            return (T)enumList.GetValue(Random.Next(enumList.Length));
        }

        #endregion
    }
}
